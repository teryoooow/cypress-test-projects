import { ecommerceObjects } from "../../pageObjects/objects";

describe('Product Listing and Pagination Tests', () => {
    const categoryProductCounts = [];

    beforeEach(() => {
        cy.visit(ecommerceObjects.productListingUrl);
    });

    it('counts products in each category and asserts the count is greater than 0', () => {
        cy.get(ecommerceObjects.category).each(($category) => {
            const categoryName = $category.find('h5').text();
            cy.wrap($category).find(ecommerceObjects.productCard).its('length').then((productCount) => {
                cy.task('log', `Category: ${categoryName}, Product Count: ${productCount}`);
                expect(productCount).to.be.gt(0);
                categoryProductCounts.push({ category: categoryName, count: productCount });
            });
        });
    });

    it('verifies product card details format', () => {
        cy.get(ecommerceObjects.productCard).each(($productCard) => {
            cy.wrap($productCard).find(ecommerceObjects.productName).should('be.visible');
            cy.wrap($productCard).find(ecommerceObjects.productPrice).should('be.visible');
            cy.wrap($productCard).find(ecommerceObjects.productRating).should('be.visible');
        });
    });

    it('finds the highest-rated product in each category and asserts its rating', () => {
        cy.get(ecommerceObjects.category).each(($category) => {
            const products = [];
            cy.wrap($category).find(ecommerceObjects.productCard).each(($productCard) => {
                cy.wrap($productCard).find(ecommerceObjects.productName).invoke('text').then(productName => {
                    cy.wrap($productCard).find(ecommerceObjects.productRating).invoke('attr', 'aria-label').then(rating => {
                        products.push({
                            name: productName,
                            rating: parseFloat(rating)
                        });
                    });
                });
            }).then(() => {
                const highestRatedProduct = products.reduce((prev, current) => (prev.rating > current.rating) ? prev : current);
                cy.task('log', `Category: ${$category.find('h5').text()}, Highest Rated Product: ${highestRatedProduct.name}`);
                const maxRating = Math.max(...products.map(p => p.rating));
                expect(highestRatedProduct.rating).to.equal(maxRating);
            });
        });
    });

    it('validates pagination', () => {
        cy.get(ecommerceObjects.pagination).should('be.visible');
        cy.get(ecommerceObjects.nextPageButton).click();
        cy.get(ecommerceObjects.pagination).find('.Mui-selected').should('have.text', '2');
        cy.get(ecommerceObjects.previousPageButton).click();
        cy.get(ecommerceObjects.pagination).find('.Mui-selected').should('have.text', '1');
    });

    it('finds the most expensive product in each category and asserts its price', () => {
        cy.get(ecommerceObjects.category).each(($category) => {
            const products = [];
            cy.wrap($category).find(ecommerceObjects.productCard).each(($productCard) => {
                cy.wrap($productCard).find(ecommerceObjects.productName).invoke('text').then(productName => {
                    cy.wrap($productCard).find(ecommerceObjects.productPrice).invoke('text').then(price => {
                        products.push({
                            name: productName,
                            price: parseFloat(price.replace('$', ''))
                        });
                    });
                });
            }).then(() => {
                const mostExpensiveProduct = products.reduce((prev, current) => (prev.price > current.price) ? prev : current);
                cy.task('log', `Category: ${$category.find('h5').text()}, Most Expensive Product: ${mostExpensiveProduct.name}`);
                const maxPrice = Math.max(...products.map(p => p.price));
                expect(mostExpensiveProduct.price).to.equal(maxPrice);
            });
        });
    });
});