import express from 'express';

const configViewEngine = (app): void => {
    app.set('views', 'src/view');
    app.set('view engine', 'ejs');
    app.use(express.static('src/public'));

    //Config request.body
    app.use(express.json()); // for json
    app.use(express.urlencoded({ extended: true }));
}
export default configViewEngine;