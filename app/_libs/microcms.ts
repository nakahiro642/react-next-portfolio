import { createClient } from "microcms-js-sdk";
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
    MicroCMSListResponse,
} from "microcms-js-sdk";

export type Member = {
    name: string;
    position: string;
    profile: string;
    image: MicroCMSImage;
} & MicroCMSListContent;

export type Category = {
    name: string;
} & MicroCMSListContent;

export type AboutProfile = {
    name: string;
    position: string;
    bio: string;
    image?: MicroCMSImage;
} & MicroCMSListContent;

export type Portfolio = {
    title: string;
    description: string;
    link?: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient ({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getMemberList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Member>({
        endpoint: "members",
        queries: queries,
    });
    return listData;
};

export const getCategoryDetail =  async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<Category>({
        endpoint: "categories",
        contentId,
        queries,
        customRequestInit: {
            next: {
                revalidate: queries?.draftKey === undefined ? 60 : 0,
            },
        },
    });
    return detailData;
};
export const getAllCategoryList = async () => {
    const listData = await client.getAllContents<Category>({
        endpoint: "categories",
    });
    return listData;
};

export const getAboutProfile = async (queries?: MicroCMSQueries) => {
    return await client.getList<AboutProfile>({
        endpoint: "about",
        queries: { limit: 1, ...queries },
        customRequestInit: {
            next: {
                revalidate: queries?.draftKey === undefined ? 60 : 0,
            },
        },
    });
};

export const getPortfolioList = async (queries?: MicroCMSQueries): Promise<MicroCMSListResponse<Portfolio>> => {
    try {
        return await client.getList<Portfolio>({
            endpoint: "portfolios",
            queries: { limit: 100, ...queries },
            customRequestInit: {
                next: {
                    revalidate: queries?.draftKey === undefined ? 60 : 0,
                },
            },
        });
    } catch (error) {
        return {
            contents: [],
            totalCount: 0,
            offset: 0,
            limit: queries?.limit ?? 0,
        };
    }
};
