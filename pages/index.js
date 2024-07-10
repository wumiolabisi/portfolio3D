import { Container, Box, Heading } from "@chakra-ui/react"


const Page = () => {
    return <Container>
        <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
            Bonjour, je m'appelle Omowumi et je suis développeuse web front-end !
        </Box>
        <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">Omowumi OLABISI</Heading>
                <p>Experte WordPress / Intégration Front-End / Développeuse Web Fullstack </p>
            </Box>
        </Box>
    </Container>
}

export default Page