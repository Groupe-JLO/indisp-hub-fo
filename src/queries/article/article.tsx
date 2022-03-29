import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
    query Client($slug: String!) {
        clients(filters: { slug: { eq: $slug } }) {
            data {
                id
                attributes {
                    company_name
                    color
                    slug
                    logo {
                        data {
                            attributes {
                                alternativeText
                                url
                            }
                        }
                    }
                    indispensables {
                        data {
                            attributes {
                                description
                                title
                                isEnabled
                                link
                                background {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                }
            }
        }
    }
`;

export default ARTICLE_QUERY;