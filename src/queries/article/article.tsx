import gql from "graphql-tag"

const ARTICLE_QUERY = gql`
    query Client($slug: String!) {
        clients(filters: { slug: { eq: $slug } }) {
            data {
                id
                attributes {
                    company_name
                    color
                    slug
                    background_image {
                        data {
                            attributes {
                                alternativeText
                                url
                            }
                        }
                    }
                    logo {
                        data {
                            attributes {
                                alternativeText
                                url
                            }
                        }
                    }
                    Indispensables {
                        description
                        title
                        link
                        background {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        logo {
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
`

export default ARTICLE_QUERY