import Image from 'next/image'; // Certifique-se de importar o componente Image

const compProduto = () => {
  return (
    <>
        <h1>Produto</h1>
        <Image src="/images/images.jpg" alt="Pizza" width={100} height={100} />
    </>
  );
}

export default compProduto;
