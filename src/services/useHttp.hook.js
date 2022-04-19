import { useCallback } from "react";

export const useHttp = () => {
   

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

       
        try {
            const response = await fetch(url, {method, body, headers});
            //console.log(response)

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch(e) {
            
            throw e;
        }
    }, []);

    

    return {request}
};

export const useHttpPost = () => {
   
    const requestPost = useCallback(async (url, body, method = 'POST',  headers = {'Content-Type': 'application/json;charset=utf-8'}) => {

        const bodyJSON = JSON.stringify(body)
        console.log(bodyJSON)
        
        try {
            const response = await fetch(url, {method, body: bodyJSON, headers});
            console.log(response)
                        
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data)

            return data;
        } catch(e) {
            
            throw e;
        }
    }, []);

    

    return {requestPost}
}