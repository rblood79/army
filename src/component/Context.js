import React, { Component } from 'react';

const UserContext = React.createContext();

class UserProvider extends Component {
    // Context state
    state = {
        url: '/',
        filter: null,
        army: null,
        user: null,
        data: null,
    };
    // Method to update state
    setTheme = async theme => {
        this.setState(
            {
                theme: theme ? 'dark' : 'light',
            }
        );
    };
    
    setFilter = filter => {
        this.setState(prevState => ({ filter }));
    };
    setUser = user => {
        this.setState(prevState => ({ user }));
    };
    setArmy = army => {
        this.setState(prevState => ({ army }));
    };
    //
    render() {
        const { children } = this.props;
        const { url, theme, filter, user, army } = this.state;
        const { setTheme, setFilter, setUser, setArmy } = this;

        return (
            <UserContext.Provider
                value={{
                    theme,
                    url,
                    filter,
                    user,
                    army,
                    setTheme,
                    setFilter,
                    setUser,
                    setArmy,
                }}>
                {children}
            </UserContext.Provider>
        );
    }
}

export default UserContext;

export { UserProvider };
