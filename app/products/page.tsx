import ProductsContainer from '@/components/products/ProductsContainer';

async function ProductsPage({
    searchParams,
}: {
    searchParams: { layout?: string; search?: string };
}) {

    const searchParamsConst = await searchParams; 
    
    const layout = searchParamsConst.layout || 'grid';
    const search = searchParamsConst.search || '';
    return (
        <>
            <ProductsContainer layout={layout} search={search} />
        </>
    );
}
export default ProductsPage;