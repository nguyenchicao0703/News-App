import { createContext, useState } from "react";

// Khi muốn sử dụng kho, gọi thằng này (Quản lý kho);
export const AppContext = createContext();

// Tạo kho
export const AppContextProvider = (props) => {
    const {children} = props;
    // Data sử dụng chung
    const [isLogin, setIsLogin] = useState(false);
    const [infoUser, setinfoUser] = useState({});
    return(
        <AppContext.Provider value={{isLogin, setIsLogin, infoUser, setinfoUser}}>
            {children}
        </AppContext.Provider>
    );
}