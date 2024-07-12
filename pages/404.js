import { Box, Heading, Container, Divider, Button, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Page introuvable</Heading>
            <Text>La page que vous recherchez n'existe pas ou a été déplacée</Text>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Retourner à la page d'accueil</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound