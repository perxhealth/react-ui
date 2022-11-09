import * as React from "react"
import { Box, Flex, Stack, StackProps, Image, Icon } from "@chakra-ui/react"

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export interface FooterProps extends StackProps {}

export const Footer = (props: FooterProps) => {
  return (
    <Stack
      align="center"
      justify="space-between"
      spacing={{ base: "4", lg: "8" }}
      direction={{ base: "column", lg: "row" }}
      {...props}>
      <Flex align="center" direction={{ base: "column", md: "row" }}>
        <Box mb={{ base: "1", md: "0" }} mr="6" pos="relative" top="-5px">
          <Image
            src="https://assets.prod.cloud.perxhealth.com/assets/1fb526ac-6652-4e78-bd38-8d37d06748f4.png"
            height="32px"
            width="88px"
            alt="Perx Health"
          />
        </Box>

        <Stack align="center" direction="row" spacing="4">
          <a href="https://facebook.com/perxhealth">
            <Icon as={FaFacebook} fontSize="20" color="gray.500" />
          </a>
          <a href="https://twitter.com/perxhealth">
            <Icon as={FaTwitter} fontSize="20" color="gray.500" />
          </a>
          <a href="https://linkedin.com/company/perx-health">
            <Icon as={FaLinkedin} fontSize="20" color="gray.500" />
          </a>
          <a href="mailto:contact@perxhealth.com?subject=Hello">
            <Icon as={MdEmail} fontSize="20" color="gray.500" />
          </a>
        </Stack>
      </Flex>

      <Stack
        flex="1"
        align="center"
        justify="center"
        direction={{ base: "column", xl: "row" }}
        spacing={{ base: "2", xl: "4" }}>
        <a href="https://perxhealth.com/terms-of-use">Terms of Use</a>
        <a href="https://perxhealth.com/privacy-policy">Privacy Policy</a>
        <a href="https://intercom.help/perx">Help Centre</a>
      </Stack>

      <Stack direction={{ base: "column", md: "row" }} spacing="2">
        <a href="https://perxhealth.app.link/hz1foI18CV">
          <Image
            src="https://assets.prod.cloud.perxhealth.com/assets/c778ba25-afbb-4df8-a3f0-7016676bad96.png"
            height="40px"
            width="124px"
            alt="Download on the App Store"
          />
        </a>

        <a href="https://perxhealth.app.link/S8CJsXlaDV">
          <Image
            src="https://assets.prod.cloud.perxhealth.com/assets/7e009faa-950f-428d-a01a-a3b6a5f5c83a.png"
            height="40px"
            width="124px"
            alt="Download on Google Play"
          />
        </a>
      </Stack>
    </Stack>
  )
}
