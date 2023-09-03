import axios from "axios";
import cheerio from "cheerio";

export const getHtml = async (url) => {
  try {
    const response = await axios.get(url);
    return cheerio.load(response.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getVideoTags = async (url) => {
  const $ = await getHtml(url);
  if (!$) return false;
  try {
    const metaTag = $("meta[property='og:video:tag']");
    let result = [];
    metaTag.each((_, el) => {
      result.push($(el).attr("content"));
    });
    return result.join(", ");
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getChannelTags = async (url) => {
  const $ = await getHtml(url);
  if (!$) return false;
  try {
    const metaTag = $("meta[property='og:video:tag']");
    let result = [];
    metaTag.each((_, el) => {
      result.push($(el).attr("content"));
    });
    return result.join(", ");
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getVideoTitle = async (url) => {
  const $ = await getHtml(url);
  if (!$) return false;
  try {
    return $("title").text().trim();
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getVideoDescription = async (url) => {
  const $ = await getHtml(url);
  if (!$) return false;
  try {
    return $("meta[name='description']").attr("content");
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getChannelDescription = async (url) => {
  const $ = await getHtml(url);
  if (!$) return false;
  try {
    return $("meta[name='description']").attr("content");
  } catch (error) {
    console.error(error);
    return false;
  }
};
