import { createContext, useState,useEffect } from "react";


export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = ({children}) =>{
    // shoping cart
    const[count,setCount] = useState(0)
    //open close
    const[isProductDetailOpen,setProductDetailOpen] = useState(false)
    const openProductDetail = () => setProductDetailOpen(true)
    const closeProductDetail = () => setProductDetailOpen(false)

    //Product detail
    const[productToShow,setProductToShow] = useState({})

    //Shopping cart add product to cart
    const[cardProducts,setCardProducts] = useState([])

     //checout Side menu
     const[isCheckoutSideMenuOpen,setCheckoutSideMenuOpen] = useState(false)
     const openCheckoutSideMenu = () => setCheckoutSideMenuOpen(true)
     const closeCheckoutSideMenu = () => setCheckoutSideMenuOpen(false)

     // Shopping cart . order
     const [order,setOrder] = useState([])

     //Get product
     const[items,setItems] = useState(null)
     const[filteredItems,setFilteredItems] = useState(null)
     //Get product by title
     const[searchByTitle,setSearchByTitle] = useState(null)

    //Get product by category
    const[searchByCategory,setSearchByCategory] = useState(null)

     

     useEffect(()=>{
       fetch('https://api.escuelajs.co/api/v1/products')
       .then(response => response.json())
       .then(data => setItems(data))
     },[])

    const filteredItemsByTitle = (items,searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items,searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType,items,searchByTitle,searchByCategory)=>{
        if(searchType==='BY_TITLE'){
            return filteredItemsByTitle(items, searchByTitle)
        }
        if(searchType==='BY_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory)
        }
        if(searchType==='BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if(!searchType){
            return items
        }
    }

    useEffect(()=>{
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE',items, searchByTitle,searchByCategory))
        if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY',items,searchByTitle, searchByCategory))
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items,searchByTitle, searchByCategory))
        if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null,items,searchByTitle, searchByCategory))
    },[items,searchByTitle,searchByCategory])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cardProducts,
            setCardProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory

        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}