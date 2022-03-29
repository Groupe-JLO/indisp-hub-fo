import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
    query Articles {
        clients {
            data {
                id
                attributes {
                    company_name
                    slug
                    logo {
                        data {
                            attributes {
                                alternativeText
                                formats
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
                                            formats
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

export default ARTICLES_QUERY;