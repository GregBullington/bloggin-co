import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { blogsApi } from './AxiosService'
import { BlogPost } from '../Models/BlogPost'

class AllBlogsService {
  async getAll(query = "") {
    const res = await blogsApi.get("" + query)
    AppState.allBlogs = res.data.map(b => new BlogPost(b))
    logger.log(AppState.allBlogs)
  }

}

export const allBlogsService = new AllBlogsService()