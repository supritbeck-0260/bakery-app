import React, { lazy, Suspense} from 'react'
import { Routes, Route } from "react-router-dom";
const RouteHandler = ({routes=[]}) => {
  return (
        <Routes>
            {routes.map(({path,location,exact},index)=>{ 

                const Component =  lazy(()=> import(`../componets/${location}`))
                    return(
                        <Route 
                              exact={exact} 
                              path={path} 
                              key={index} 
                              element={
                                  <Suspense fallback='Loading...'>
                                            <Component/>
                                   </Suspense>
                                  }
                            />
                        )
            })}
            
        </Routes>
  )
}

export default RouteHandler