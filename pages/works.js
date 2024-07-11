import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbpage28 from '../public/images/works/page28-wp.png'
import thumbkroskel from '../public/images/works/thumbkroskel.png'
import Layout from '../components/layouts/article'
const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projets
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="page28" title="Page 28" thumbnail={thumbpage28}>
                            Un catalogue de films et séries exclusivement réalisées par des femmes
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="kroskel" title="La boutique Kroskel" thumbnail={thumbkroskel}>
                            Une marque de vêtements franco-camerounaise pour les femmes audacieuses
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )

}

export default Works