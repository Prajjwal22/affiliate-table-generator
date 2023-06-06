export const productBoxCSS = `
.product_box {
    padding:15px;
    border: 1px solid rgb(209, 209, 209);
    width: 100%;
    display: flex;
    gap:20px;
    position: relative;
    
}

.product_badge {
    text-transform: uppercase;
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgb(36, 253, 126);
    color:black;
    padding:5px 20px;
}

.product_left {
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center
}

.product_image {
    max-width: 330px;
    height: 330px;
    object-fit: contain;
}

.product_rating {
    max-width: 110px;
}

.product_reviews {
    font-size: .8rem;
    color:rgb(134, 134, 134);
}


.product_right {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color:rgb(63, 63, 63);
    font-weight: 500;
}

.product_title {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: underline;
    text-underline-offset: 2px;
    color:rgb(35, 123, 255);
    margin:20px 0;
}


.product_features {
    margin-left: 30px;
    line-height: 1.8em;
list-style: none;
}

.product_features li {
    position: relative;
}

.product_features li::before {
    position: absolute;
    content: '';
    background-image: url('https://affiliate-table-generator.vercel.app/tick.png');
    background-repeat: no-repeat;
    background-size: contain;
    height: 17px;
    width: 17px;
    left: -25px;
    top: 5px;
}

.product_btn {
    cursor: pointer;
    background-color: yellow;
    padding: 10px 20px;
    bottom: 10%;
    right: 5%;
    margin-top: 20px;
    margin-right: 30px;
    margin-left: auto;
    border-radius: 4px;
    display: inline-flex;
    gap: 10px;
    align-items: center;
    border: 1px solid rgb(129, 129, 129);
}

.product_btn img {
    max-width: 30px;
}

.product_pricing {
    margin-top: 20px;
    margin-right: 30px;
    margin-left:auto;
    display: flex;
    align-items: center;
    gap: 20px;
}

.striked_price {
    color:rgb(134, 134, 134);
    text-decoration:line-through;
}

.product_discount {
    background-color: rgb(14, 164, 69);
    color:white;
    border-radius: 2px;
    padding:3px 8px;
}
.product_price {
    font-weight: bold;
    font-size: 1.5rem;
    color:rgb(90, 90, 90);

}

@media screen and (max-width: 768px) {
    .product_box {
        flex-direction: column;
        align-items: center;
        min-width: auto;
    }

    .product_pricing, .product_btn {
        margin: auto;
        margin-top: 10px;
    }
}
`