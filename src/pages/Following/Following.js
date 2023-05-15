import { useEffect, useState } from 'react';
import CardList from './CardList /CardList';
import * as usersService from '~/services/usersService';

function Following() {
    const [suggestedFollowers, setSuggestedFollowers] = useState([]);
    const PERPAGE = 15;
    const PAGE = Math.floor(Math.random() * 15 + 1);
    useEffect(() => {
        usersService
            .getSuggested(PAGE, PERPAGE)
            .then((data) => {
                setSuggestedFollowers(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return <CardList data={suggestedFollowers} />;
}

export default Following;
