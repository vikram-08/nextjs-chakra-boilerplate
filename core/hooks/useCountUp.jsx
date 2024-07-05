import logger from "@/log";
import { useState, useRef, useEffect } from "react";

function useCountUp(targetRef, endVal, options = {}) {
  const defaults = {
    startVal: 0,
    decimalPlaces: 0,
    duration: 2000,
    useEasing: true,
    useGrouping: true,
    useIndianSeparators: false,
    smartEasingThreshold: 999,
    smartEasingAmount: 333,
    separator: ",",
    decimal: ".",
    prefix: "",
    suffix: "",
    enableScrollSpy: true,
    scrollSpyDelay: 200,
    scrollSpyOnce: false,
  };

  const {
    startVal = defaults.startVal,
    decimalPlaces = defaults.decimalPlaces,
    duration = defaults.duration,
    useEasing = defaults.useEasing,
    useGrouping = defaults.useGrouping,
    useIndianSeparators = defaults.useIndianSeparators,
    smartEasingThreshold = defaults.smartEasingThreshold,
    smartEasingAmount = defaults.smartEasingAmount,
    separator = defaults.separator,
    decimal = defaults.decimal,
    prefix = defaults.prefix,
    suffix = defaults.suffix,
    enableScrollSpy = defaults.enableScrollSpy,
    scrollSpyDelay = defaults.scrollSpyDelay,
    scrollSpyOnce = defaults.scrollSpyOnce,
  } = options;

  const [startValState, setStartValState] = useState(startVal);
  const [frameVal, setFrameVal] = useState(startVal);
  const [paused, setPaused] = useState(true);
  const [error, setError] = useState("");
  const [finalEndVal, setFinalEndVal] = useState(null);
  const [useEasingState, setUseEasingState] = useState(useEasing);
  const [countDown, setCountDown] = useState(false);
  const [once, setOnce] = useState(false);
  const [endValState, setEndValState] = useState(endVal);

  const startTimeRef = useRef(null);
  const rAFRef = useRef(null);
  const remainingRef = useRef(duration);
  const elRef = useRef(null);
  const timeoutRef = useRef(null);

  const easeOutExpo = (t, b, c, d) =>
    (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;

  const ensureNumber = (n) => typeof n === "number" && !isNaN(n);

  const formatNumber = (num) => {
    const neg = num < 0 ? "-" : "";
    let result = Math.abs(num).toFixed(decimalPlaces);
    const x = result.split(".");
    const x1 = x[0];
    const x2 = x.length > 1 ? decimal + x[1] : "";
    let x3 = "";

    if (useGrouping) {
      let factor = 3,
        j = 0;
      for (let i = 0, len = x1.length; i < len; ++i) {
        if (useIndianSeparators && i === 4) {
          factor = 2;
          j = 1;
        }
        if (i !== 0 && j % factor === 0) {
          x3 = separator + x3;
        }
        j++;
        x3 = x1[len - i - 1] + x3;
      }
      result = neg + prefix + x3 + x2 + suffix;
    } else {
      result = neg + prefix + x1 + x2 + suffix;
    }

    return result;
  };

  const formattingFn = options.formattingFn
    ? options.formattingFn
    : formatNumber;
  const easingFn = options.easingFn ? options.easingFn : easeOutExpo;

  const validateValue = (value) => {
    const newValue = Number(value);
    if (!ensureNumber(newValue)) {
      setError(`[CountUp] invalid start or end value: ${value}`);
      return null;
    } else {
      return newValue;
    }
  };

  const resetDuration = () => {
    startTimeRef.current = null;
    remainingRef.current = duration;
  };

  const determineDirectionAndSmartEasing = () => {
    const end = finalEndVal || endValState;
    setCountDown(startVal > end);
    const animateAmount = end - startVal;

    if (Math.abs(animateAmount) > smartEasingThreshold && useEasing) {
      setFinalEndVal(end);
      const up = countDown ? 1 : -1;
      setEndValState(end + up * smartEasingAmount);
    } else {
      setEndValState(end);
      setFinalEndVal(null);
    }
    setUseEasingState(finalEndVal === null ? useEasing : false);
  };

  const start = (callback) => {
    if (error) return;
    if (options.onStartCallback) {
      options.onStartCallback();
    }
    if (callback) {
      options.onCompleteCallback = callback;
    }
    if (duration > 0) {
      determineDirectionAndSmartEasing();
      setPaused(false);
      rAFRef.current = requestAnimationFrame(count);
    } else {
      printValue(endValState);
    }
  };

  const pauseResume = () => {
    if (!paused) {
      cancelAnimationFrame(rAFRef.current);
    } else {
      startTimeRef.current = null;
      setStartValState(frameVal);
      determineDirectionAndSmartEasing();
      rAFRef.current = requestAnimationFrame(count);
    }
    setPaused(!paused);
  };

  const reset = () => {
    cancelAnimationFrame(rAFRef.current);
    setPaused(true);
    resetDuration();
    setStartValState(validateValue(options.startVal));
    setFrameVal(startVal);
    printValue(startVal);
  };

  const update = (newEndVal) => {
    cancelAnimationFrame(rAFRef.current);
    startTimeRef.current = null;
    setEndValState(validateValue(newEndVal));
    if (endValState === frameVal) return;
    setStartValState(frameVal);
    if (finalEndVal == null) resetDuration();
    setFinalEndVal(null);
    determineDirectionAndSmartEasing();
    rAFRef.current = requestAnimationFrame(count);
  };

  const count = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;

    const progress = timestamp - startTimeRef.current;

    if (progress < 0) {
      // Timestamp may be negative in some edge cases; handle this safely
      return;
    }

    remainingRef.current = duration - progress;

    let newFrameVal;
    try {
      if (useEasingState) {
        if (countDown) {
          newFrameVal =
            startVal - easingFn(progress, 0, startVal - endValState, duration);
        } else {
          newFrameVal = easingFn(
            progress,
            startVal,
            endValState - startVal,
            duration
          );
        }
      } else {
        newFrameVal =
          startVal + (endValState - startVal) * (progress / duration);
      }
    } catch (error) {
      logger.error("Error during easing function calculation:", error);
      return; // or handle error in a way that is appropriate for your application
    }

    const wentPast = countDown
      ? newFrameVal < endValState
      : newFrameVal > endValState;
    newFrameVal = wentPast ? endValState : newFrameVal;

    newFrameVal = Number(newFrameVal.toFixed(decimalPlaces));

    setFrameVal(newFrameVal);
    printValue(newFrameVal);

    if (progress < duration) {
      rAFRef.current = requestAnimationFrame(count);
    } else {
      cancelAnimationFrame(rAFRef.current);
      rAFRef.current = null;

      if (finalEndVal !== null) {
        update(finalEndVal);
      } else if (options.onCompleteCallback) {
        options.onCompleteCallback();
      }

      startTimeRef.current = null;
    }
  };

  const printValue = (val) => {
    if (!elRef.current) return;
    const result = formattingFn(val);
    if (options.plugin?.render) {
      options.plugin.render(elRef.current, result);
      return;
    }
    if (elRef.current.tagName === "INPUT") {
      elRef.current.value = result;
    } else if (
      elRef.current.tagName === "TEXT" ||
      elRef.current.tagName === "SPAN"
    ) {
      elRef.current.textContent = result;
    } else {
      elRef.current.innerHTML = result;
    }
  };

  // useEffect for scroll spy and initial setup
  useEffect(() => {
    const el = targetRef.current;
    elRef.current = el;

    if (el) {
      printValue(startVal);
    } else {
      setError("[CountUp] target is null or undefined");
    }

    const handleScroll = () => {
      if (!elRef.current || (scrollSpyOnce && once)) return;
      const rect = elRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInView && paused) {
        setPaused(false);
        // Clear previous timeout if exists
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        // ! Almost five hours were spent trying to identify the bug in this function. So before making any changes here, proceed with caution.
        if (startTimeRef.current) {
          startTimeRef.current = null;
        }
        // Set new timeout to start animation
        timeoutRef.current = setTimeout(start, scrollSpyDelay);
        if (scrollSpyOnce) setOnce(true);
      } else if (!isInView && !paused) {
        setPaused(true);
        cancelAnimationFrame(rAFRef.current);
        // Clear timeout if animation paused due to element going out of view
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    };

    if (typeof window !== "undefined" && enableScrollSpy) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => {
        clearTimeout(timeoutRef);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [
    targetRef,
    enableScrollSpy,
    scrollSpyDelay,
    scrollSpyOnce,
    paused,
    once,
    start,
  ]);

  return {
    start,
    pauseResume,
    reset,
    update,
    error,
    startVal: startValState,
    frameVal,
    paused,
  };
}

export default useCountUp;
