import { REQUEST_STATUS } from "../../utils/constants";

export const selectArticlesList = state => state.articles.selectArticlesList;
export const selectArticlesLoading = state => state.articles.request.status === REQUEST_STATUS.LOADING;
export const selecetArticlesError = state => state.articles.request.error;