COMPANY_CACHE_KEY = "rivax:company"

ABOUT_CACHE_KEY = "rivax:about"
ABOUT_DETAIL_CACHE_KEY = "rivax:about:detail"

PRODUCTS_LIST_CACHE_KEY = "rivax:products:list"


def product_cache_key(slug):
    return f"rivax:product:{slug}"
 