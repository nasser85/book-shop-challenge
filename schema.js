import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Book {
        primary_isbn: ID,
        title: String,
        authors: [Author],
        price: String,
        active: Boolean,
        image: String,
        bookkey: String,
        amazon_rank: Int,
        publisher: String,
        primary_bisacs: [Genre],
        description: String
    }
    scalar Genre
    type Author {
        role: Int,
        firebrand_role: String,
        firebrand_id: Int,
        display_name: String,
        first_name: String,
        last_name: String,
        slug: String
    }
    type Query {
        getBooks(page: Int = 1, active: Boolean = false): [Book]
        searchBooks(search: String): [Book]
    }
`)

export default schema;
