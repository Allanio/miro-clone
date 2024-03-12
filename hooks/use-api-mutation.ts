import {useState} from "react";
import {useMutation} from "convex/react";

export const useApiMutation = (mutationFunction: any) => {
    const [loading, setLoading] = useState(false);
    const apiMutation = useMutation(mutationFunction);

    const mutate = async (payload: any) => {
        setLoading(true);
        return apiMutation(payload)
            .finally(() => setLoading(false))
            .then((result: any) => {
            return result;
        })
            .catch((error: any) => {
                throw error;
            })
    };

    return {
        mutate,
        loading,
    };

}
