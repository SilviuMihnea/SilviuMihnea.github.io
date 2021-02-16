const Iamge = () => {
    return (
        <div style={{
            width: 'auto',
            height: '70%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <img unselectable={'on'} src={'./images/with_background.jpg'} alt={"No Background"}
                 style={{ width: 'auto', height: '100%', filter: 'grayscale(1)' }}/>
            <img unselectable={'on'} src={'./images/no_background.png'} alt={"No Background"}
                 style={{
                     width: 'auto',
                     height: '100%',
                     position: 'absolute',
                     top: 0,
                     left: 0,
                 }}/>
        </div>
    );
}

export default Image;