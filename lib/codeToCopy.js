export const cssToCopy = `.table_container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 15px;
    width: 100%;
    justify-content: center;
}

.card {
    max-width: 300px;
    width: 100%;
    height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    box-shadow: 3px 4px 20px rgba(0, 0, 0, .1);
    border-radius: 8px;
    padding: 20px;
    overflow: hidden;
    position: relative;
}

.product_badge {
    font-size: .9rem;
    position: absolute;
    left: -23px;
    color: white;
    top: -26px;
    background: #00c6ff;
    background: linear-gradient(to right, #0072ff, #00c6ff);
    height: 100px;
    width: 100px;
    padding-top: 31px;
    border-radius: 50%;
    padding-left: 32px;
    padding-right: 10px;
}

.product_name {
    font-size: 1.3rem;
    font-weight: 700;
    text-align: center;
}

.product_image {
    width: 150px;
}

.product_image img {
    max-width: 100%;
    max-height: 150px;
    object-fit: contain;
}


.product_feat {
    width: 100%;
}

.product_feat li {
    position: relative;
    margin-left: 12%;
}

.product_feat li::before {
    position: absolute;
    background-image: url("https://affiliate-table-generator.vercel.app/_next/static/media/right-arrow.7032703a.png");
    background-size: contain;
    background-repeat: no-repeat;
    content: '';
    height: 20px;
    width: 20px;
    top: 0;
    left: -30px;
}


.cta_btn {
    position: relative;
    margin-top: 10px;
    margin-left: -20px;
    margin-right: -20px;
    width: -webkit-fill-available;
}


.btn {
    background: #00c6ff;
    background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);
    background: linear-gradient(to right, #0072ff, #00c6ff);
    text-decoration: none;
    color: #fff;
    font-size: 15px;
    transition: .3s all linear;
    bottom: 0;
    width: 100%;
    display: block;
    padding: 12px;
    text-align: center;
    margin-bottom: -20px;
}

.btn:hover {
    color: #fff !important;
    background: -webkit-linear-gradient(to top, #3a7bd5, #00d2ff);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #3a7bd5, #00d2ff);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}


.product_input {
    margin: auto;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}
`