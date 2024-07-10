export const getBasePath = () => process.env.NEXT_PUBLIC_BASE_PATH || '';

export const withBasePath = (url) => {
      const basePath = getBasePath();
      return `${basePath}${url}`;
};

