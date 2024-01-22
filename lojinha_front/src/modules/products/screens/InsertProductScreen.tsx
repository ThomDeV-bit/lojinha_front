import { Button, Input } from "antd"
import { DivInput, ImageInput, InsertProductContainer, InsertProductSection } from "../styled/insertProductScreen.style"
import Dropzone from "react-dropzone"

export const ProductImage = () => {
    return (
        <InsertProductContainer>
            <a style={{ color: 'white' }}>Insert new Prodct</a>

            <InsertProductSection>
                <DivInput>
                    <label>Categorie</label>
                    <Input style={{ width: 300, borderColor: 'black' }}></Input>
                </DivInput>
                <DivInput>
                    <label>Name</label>
                    <Input style={{ width: 300, borderColor: 'black' }}></Input>
                </DivInput>
                <DivInput>
                    <label>Price</label>
                    <Input style={{ width: 300, borderColor: 'black' }}></Input>
                </DivInput>
                <DivInput>
                    <label>Quantity</label>
                    <Input style={{ width: 300, borderColor: 'black' }}></Input>
                </DivInput>
                <Dropzone onDropAccepted={() => { }} >
                    {({ getRootProps, getInputProps, isDragctive, isDragReject }) => (

                        <ImageInput
                            {...getRootProps()}
                            isDragActive={isDragctive}
                            isDragReject={isDragReject}
                        >
                            <input {...getInputProps()} />
                        </ImageInput>)
                    }
                </Dropzone>
                <Button style={{
                    width: 350,
                    borderColor: 'black',
                    backgroundColor: 'blue',
                    color: 'white',
                    marginBottom: 30
                }}>Inserir</Button>
            </InsertProductSection>
        </InsertProductContainer>
    )
} 