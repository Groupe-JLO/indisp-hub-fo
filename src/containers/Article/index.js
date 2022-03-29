import React from "react";
import ReactGA from 'react-ga';
import { useParams } from "react-router";

import Query from "../../components/Query";

import * as Styles from "./styles"

import ARTICLE_QUERY from "../../queries/article/article";

const Article = () => {
    let { slug } = useParams();
    ReactGA.initialize('UA-140325963-5');
    console.log(ReactGA)


    return (
        <Query query={ARTICLE_QUERY} slug={slug}>
            {({ data: { clients } }) => {
                if (clients.data.length) {
                    ReactGA.pageview('/' + clients.data[0].attributes.slug);
                    const logoUrl = process.env.REACT_APP_BACKEND_URL +
                            clients.data[0].attributes.logo.data.attributes.url;
                    const cards  = clients.data[0].attributes.indispensables.data

                    function triggerGaEvent(destination) {
                        ReactGA.event({
                            category: clients.data[0].attributes.company_name,
                            action: destination,
                            label: "Click sur une carte indispensable", // optional
                        });
                    }

                    return (
                        <Styles.Layout>
                            <Styles.HeadingContainer>
                                <h1>Les indispensables</h1>
                                <img alt={clients.data[0].attributes.logo.data.attributes.alternativeText}
                                     src={logoUrl}/>
                            </Styles.HeadingContainer>
                            <Styles.CardsContainer>
                                {cards.map((card) => {
                                    const imageUrl =
                                        process.env.NODE_ENV !== "development"
                                            ? card.attributes.background.data[0].attributes.url
                                            : process.env.REACT_APP_BACKEND_URL +
                                            card.attributes.background.data[0].attributes.url
                                    return (
                                        <Styles.CardContainer key={clients.data[0].attributes.slug} backgroundImage={imageUrl} color={clients.data[0].attributes.color} onClick={() => triggerGaEvent(card.attributes.title)}>
                                            <h2>{card.attributes.title}</h2>
                                            <a href={card.attributes.link} target={"_blank"}>Accéder au module</a>
                                        </Styles.CardContainer>
                                    )
                                })}
                            </Styles.CardsContainer>
                        </Styles.Layout>
                    );
                }
            }}
        </Query>
    );
};

export default Article;