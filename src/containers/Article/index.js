import React from "react";
import ReactGA from 'react-ga';
import {useParams} from "react-router";

import Query from "../../components/Query";

import * as Styles from "./styles"
import indispLogo from "../../assets/indisp_logo.png"

import ARTICLE_QUERY from "../../queries/article/article";

const Article = () => {
    let {slug} = useParams();
    ReactGA.initialize('UA-140325963-5');


    return (
        <Query query={ARTICLE_QUERY} slug={slug}>
            {({data: {clients}}) => {
                if (clients.data.length) {
                    ReactGA.pageview('/' + clients.data[0].attributes.slug);
                    const logoUrl = process.env.REACT_APP_BACKEND_URL +
                        clients.data[0].attributes.logo.data.attributes.url;
                    const cards = clients.data[0].attributes.Indispensables

                    function triggerGaEvent(destination) {
                        ReactGA.event({
                            category: clients.data[0].attributes.company_name,
                            action: destination,
                            label: "Click sur une carte indispensable", // optional
                        });
                    }
                    return (
                        <>
                            <Styles.Header>
                                <Styles.HeadingContainer>
                                    <img alt="Logo"
                                         src={indispLogo}/>
                                    <img alt={clients.data[0].attributes.logo.data.attributes.alternativeText}
                                         src={logoUrl}/>
                                </Styles.HeadingContainer>
                            </Styles.Header>
                            <Styles.AppContainer>
                                <Styles.Layout>
                                    <Styles.CardsContainer>
                                        {cards.map((card) => {
                                            const imageUrl = process.env.REACT_APP_BACKEND_URL +
                                                    card.background.data[0].attributes.url
                                            const logoUrl = process.env.REACT_APP_BACKEND_URL +
                                                    card.logo.data.attributes.url
                                            return (
                                                <Styles.CardContainer key={clients.data[0].attributes.slug}
                                                                      backgroundCardImage={imageUrl}
                                                                      color={clients.data[0].attributes.color}
                                                                      onClick={() => triggerGaEvent(card.title)}>
                                                    <Styles.CardContent>
                                                        <h2>{card.title}</h2>
                                                        <p>{card.description}</p>
                                                        <a href={card.link} rel="noreferrer" target={"_blank"}>Accéder au module</a>
                                                    </Styles.CardContent>
                                                    <Styles.CardLogo>
                                                        <img alt={""} src={logoUrl}/>
                                                    </Styles.CardLogo>
                                                </Styles.CardContainer>
                                            )
                                        })}
                                    </Styles.CardsContainer>
                                </Styles.Layout>
                            </Styles.AppContainer>
                        </>
                    );
                }
            }}
        </Query>
    );
};

export default Article;