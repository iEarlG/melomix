"use client";

import { MyUserContentProvider } from "@/hooks/useUser";

interface UserProviderProps { 
    children: React.ReactNode;
};

const UserProvider: React.FC<UserProviderProps> = ({
    children,
}) => {
    return ( 
        <MyUserContentProvider>
            {children}
        </MyUserContentProvider>
    );
}
 
export default UserProvider;