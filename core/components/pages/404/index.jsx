import { Link } from "@/components";
import { pages } from "@/config";
import { Flex, Heading, Button, Box } from "@chakra-ui/react";
import { getTranslations } from "next-intl/server";

async function NotFound404() {
  const t = await getTranslations("");

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      position="relative"
      overflow="hidden"
      className="mb-4"
    >
      {/* Particle Animation */}
      <Box className="particles text-center">
        <Heading fontSize="8xl" mb={4}>
          {t("errors.notFound")}
        </Heading>
        <Heading fontSize="2xl" textAlign="center" mb={8}>
          {
            t.raw("pageNotFoundMessages")[
              Math.floor(Math.random() * t.raw("pageNotFoundMessages").length)
            ]
          }
        </Heading>
        <Link href={pages.home}>
          <Button
            size="lg"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "lg",
            }}
          >
            {t("textBackToHome")}
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}

export default NotFound404;
