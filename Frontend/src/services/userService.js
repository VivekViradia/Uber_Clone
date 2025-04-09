import { apiRequest } from "../utils/axios";

const getUserAndCaptionLogin = async (slug, payload) => {
    console.log('slug', slug);
    console.log('payload', payload);
    try {
        const response = await apiRequest({
            url: `${slug === "caption" ? "caption" : "user"
                }/login`,
            method: 'POST',
            payload,
        });
        return response;
    } catch (error) {
        throw error;
    }
}
export default getUserAndCaptionLogin;