import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { WorkImage, Meta, Title } from '../../components/work'
import P from '../../components/content'
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Page28">
            <Container>
                <Title>
                    Page 28 <Badge>2023</Badge>
                </Title>
                <P>
                    Catalogue de films et séries réalisés par les professionnelles du cinéma
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Adresse</Meta>
                        <Link href="http://page28.fr">Page28.fr</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>WordPress, PHP, Javascript, SASS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Dernière mise à jour</Meta>
                        <span>Juillet 2024</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/page28-wp.png" alt="Image de la page d'accueil du site page28.fr" />
                <WorkImage src="/images/works/page28-catalogue.png" alt="Image de du catalogue du site page28.fr" />
                <WorkImage src="/images/works/page28-ficheoeuvre.png" alt="Image de du catalogue du site page28.fr" />
            </Container>
        </Layout>
    )
}

export default Work