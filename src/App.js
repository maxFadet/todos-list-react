import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { Navigation } from "./common/Navigation/index.js";
import { Loader } from "./common/Loader";
import { Footer } from './common/Footer';
import { AppWrapper, MainContent } from "./styled.js";

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
        <AppWrapper>
            <Navigation />
            <MainContent>
                {loading ? (
                    <Loader extraTopMargin={true} />
                ) : (
                    <Switch>
                        <Route exact path="/zadania">
                            <TasksPage />
                        </Route>
                        <Route path="/zadania/:id">
                            <TaskPage />
                        </Route>
                        <Route path="/autor">
                            <AuthorPage />
                        </Route>
                        <Route>
                            <Redirect to="/zadania" />
                        </Route>
                    </Switch>
                )}
            </MainContent>
            <Footer />
        </AppWrapper>
    );
};

export default () => (
    <Router>
        <App />
    </Router>
);