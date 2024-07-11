import { Button, Container, Box, Heading, Image, useColorModeValue, Link } from '@chakra-ui/react'
import Section from '../components/section'
import Content from '../components/content'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Bonjour, je m'appelle Omowumi et je suis développeuse web front-end !
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">Omowumi OLABISI</Heading>
                        <p>Experte WordPress / Intégration Front-End / Développeuse Web Fullstack </p>
                    </Box>
                </Box>

                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/wumi.jpeg" alt="Omowumi OLABISI, développeuse web basé en région parisienne" />
                </Box>

                <Section delay={0.1}>

                    <Heading as="h3" variant="section-title">
                        Projets
                    </Heading>
                    <Content>
                        Salut ! Moi, c'est Omowumi OLABISI, passionnée de développement web depuis toujours. Ayant grandi avec un ordinateur à la maison, j'ai vite compris l'importance du monde virtuel et j'ai décidé de suivre des études dans le web pour créer des sites offrant une expérience utilisateur optimale. WordPress a été mon point de départ grâce à sa facilité d'utilisation, et je continue de l'utiliser pour mes projets personnels.

                        Ce que j'aime le plus, c'est concevoir des interfaces immersives et des expériences utilisateur captivantes. Grande fan d'animation, je rêve de réaliser un film d'animation un jour, et je m'intéresse beaucoup à la conception 3D pour atteindre cet objectif.

                        Un projet dont je suis particulièrement fière est le site de Kroskel, une marque franco-camerounaise, que j'ai développé de A à Z. Cela a grandement contribué à leur visibilité en ligne.

                        En dehors du développement web, j'adore apprendre à jouer de nouveaux instruments. J'ai appris la guitare en autodidacte et je suis actuellement en train d'apprendre le piano. Je fais aussi de la musique assistée par ordinateur (MAO).
                    </Content>
                    <Box align="center" my={4}>
                        <NextLink href="/">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">Mon portfolio</Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">Bio</Heading>
                    <BioSection>
                        <BioYear>1994</BioYear>
                        Née aux Lilas, élevée au Bel-Air à Montreuil
                    </BioSection>
                    <BioSection>
                        <BioYear>2015</BioYear>
                        Licence Professionnelle Création et Développement Numérique en Ligne (Paris 8)
                    </BioSection>
                    <BioSection>
                        <BioYear>2016</BioYear>
                        BTS Services Informatiques aux Organisations
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Obtention de la certification RNCP35078 – Niveau 7 – NSF 326
                    </BioSection>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        Renouvellement de la certification RNCP35078 – Niveau 7 – NSF 326
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">Ce que j'aime</Heading>
                    <Content>
                        Jouer aux Sims 3 <Link href="https://simsrealityshows.tumblr.com/">(Simstory inventée par moi)</Link>,
                        la musique assistée par ordinateur <Link href="https://soundcloud.com/wumi-olabisi">(que je publie sur SoundCloud)</Link>
                    </Content>

                </Section>
            </Container>
        </Layout>
    )
}

export default Page