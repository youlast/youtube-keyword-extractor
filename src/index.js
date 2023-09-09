const axios = require("axios");
const cheerio = require("cheerio");

const getHtml = async (url) => {
  try {
    const response = await axios.get(url);
    return cheerio.load(response.data);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getVideoTags = async (url) => {
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

const getChannelTags = async (url) => {
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

const getVideoTitle = async (url) => {
  const $ = await getHtml(url);
  if (!$) return false;
  try {
    return $("title").text().trim();
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getVideoDescription = async (url) => {
  const $ = await getHtml(url);
  if (!$) return false;
  try {
    return $("meta[name='description']").attr("content");
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getChannelDescription = async (url) => {
  const $ = await getHtml(url);
  if (!$) return false;
  try {
    return $("meta[name='description']").attr("content");
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = {
  getHtml,
  getVideoTags,
  getChannelTags,
  getVideoTitle,
  getVideoDescription,
  getChannelDescription,
};
