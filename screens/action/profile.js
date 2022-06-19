export const getType = {
    USERLIST:"USERLIST",
    ID:"ID",
    FIRSTNAME:"FIRSTNAME",
    LASTNAME:"LASTNAME",
    EMAIL:"EMAIL",
    PHONE:"PHONE",
}

export const getActions = {
    updateUserList: (param) => { return { type: getType.USERLIST, payload: param } },
    updateId: (param) => { return { type: getType.ID, payload: param } },
    updateFirstName: (param) => { return { type: getType.FIRSTNAME, payload: param } },
    updateLastName: (param) => { return { type: getType.LASTNAME, payload: param } },
    updateEmail: (param) => { return { type: getType.EMAIL, payload: param } },
    updatePhone: (param) => { return { type: getType.PHONE, payload: param } },
}

export const updateUserList = (list) => {
    return async dispatch => {
        dispatch(getActions.updateUserList(list));
    };
};

export const updateId = (id) => {
    return async dispatch => {
        dispatch(getActions.updateId(id));
    };
};


export const updateFirstName = (first_name) => {
    return async dispatch => {
        dispatch(getActions.updateFirstName(first_name));
    };
};

export const updateLastName = (last_name) => {
    return async dispatch => {
        dispatch(getActions.updateLastName(last_name));
    };
};

export const updateEmail = (email) => {
    return async dispatch => {
        dispatch(getActions.updateEmail(email));
    };
};

export const updatePhone = (phone) => {
    return async dispatch => {
        dispatch(getActions.updatePhone(phone));
    };
};

export const modifyList = (list) => {
    return async dispatch => {
        let filterArray = list.userList.filter(res=>res.id != list.id)
        let modiftArray = [
        {
            id:list.id,
            firstName:list.firstName,
            lastName:list.lastName,
            email:list.email,
            phone:list.phone,
        },
        ...filterArray
        ]
        dispatch(getActions.updateUserList(modiftArray));
    };
};

