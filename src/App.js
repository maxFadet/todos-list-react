import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { Navigation } from "./Navigation";
import { Loader } from "./common/Loader";
import { Footer } from './common/Footer';

const App = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <>
            <Navigation />
            {loading ? (
                <Loader extraTopMargin={true} />
            ) : (
                <Switch>
                    <Route path="/zadania">
                        <TasksPage />
                    </Route>
                    <Route path="/autor">
                        <AuthorPage />
                    </Route>
                    <Route path="/task/:id">
                        <TaskPage />
                    </Route>
                    <Route>
                        <Redirect to="/zadania" />
                    </Route>
                </Switch>
            )}
            <Footer />
        </>
    );
};

export default () => (
    <Router>
        <App />
    </Router>
);