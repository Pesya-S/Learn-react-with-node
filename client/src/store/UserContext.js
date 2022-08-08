import React from "react";

// set the defaults
const UserContext = React.createContext({
    currentUser:{id: 4,name:'Tom'},
    setUserContext: () => {}
});

export default UserContext;
