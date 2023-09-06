import { createContext, useContext, useState } from "react";

const Colors = [
    {
        color: "#be061f",
        name: "red",
    },
    {
        color: "#038e42",
        name: "green",
    },
    {
        color: "#000000",
        name: "blue",
    },
];


const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
    const [material, setMaterial] = useState("leather");
    const [color, setColor] = useState('#be061f');

    return (
        <CustomizationContext.Provider
            value={{
                material,
                setMaterial,
                Colors,
                color,
                setColor,
            }}
        >
            {props.children}
        </CustomizationContext.Provider>
    );
};

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
};