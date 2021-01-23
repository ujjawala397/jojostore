import {createSelector} from 'reselect';

const COLLECTION_ID_MAP={
    milk:1,
    dal:2,
    paste:3,
    soap:4,
    shampoo:5,
    conditioner:6,
    refined:7,
    pasta:8,
    handwash:9
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam =>
createSelector(
    [selectCollections],
    collections =>
        collections.find(
            collection => (collection.id === COLLECTION_ID_MAP[collectionUrlParam])
        )
)