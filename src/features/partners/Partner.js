const Partner = (partner) => {
    if (partner) {
        const { image, name , description } = partner
        return (
            <>
                <img src={partner.partner.image} alt={partner.partner.name} style={{ width: '150px' }} />
                <div className='m-4'>
                    <h5 className='fw-bold'>{partner.partner.name}</h5>
                        {partner.partner.description}
                </div>
            </>
        )
    }
    return null;
};

  export default Partner;