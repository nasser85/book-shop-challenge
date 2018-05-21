const metaData = {
    url: 'http://localhost:8000/api',
    getBooks: (pageNumber, status) => {
        return `{
                  getBooks(page: ${pageNumber}, active: ${status}) {
                    primary_isbn
                    title
                    authors {
                      role
                      firebrand_role
                      firebrand_id
                      display_name
                      first_name
                      last_name
                      slug
                    }
                    price
                    active
                    image
                    bookkey
                    amazon_rank
                    publisher
                    primary_bisacs
                    description
                  }
                }`
    },
    searchBooks: (query) => {
        return `{
            searchBooks(search: ${query}) {
                    primary_isbn
                    title
                    authors {
                      role
                      firebrand_role
                      firebrand_id
                      display_name
                      first_name
                      last_name
                      slug
                    }
                    price
                    active
                    image
                    bookkey
                    amazon_rank
                    publisher
                    primary_bisacs
                    description
                  }
        }`
    }

}

export default class Client {
    static getBooks(pageNumber, status) {
        return fetch(metaData.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: metaData.getBooks(pageNumber, status)})
        })
        .then(data=>data.json());
    }
    static searchBooks(query) {
        return fetch(metaData.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: metaData.searchBooks(query)})
        })
        .then(data=>data.json());
    }
}
