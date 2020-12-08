import React from 'react'
import {Text, TouchableOpacity, TouchableWithoutFeedback, View, Image, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import ImageZoom from 'react-native-image-pan-zoom';
import Icon from 'react-native-vector-icons/Feather';

export default class ImageModal extends React.Component {

    render() {
        return (
            <Modal isVisible={this.props.imageModal.visible}>
                {/*<TouchableWithoutFeedback onPress={() => this.props.setImageModal(false, '',0,0)}>*/}
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity style={{position: 'absolute', top: 20, right: 20, zIndex: 3, elevation: 3}} onPress={() => this.props.setImageModal(false)}>
                            <Icon name="x-circle" size={40} color="#FFFFFF" />
                        </TouchableOpacity>
                        <ImageZoom cropWidth={Dimensions.get('window').width}
                                   cropHeight={Dimensions.get('window').height}
                                   imageWidth={this.props.imageModal.width}
                                   imageHeight={this.props.imageModal.height}
                        >
                            <Image style={{width: this.props.imageModal.width, height: this.props.imageModal.height}} source={{uri: this.props.imageModal.url}}/>
                        </ImageZoom>
                    </View>
                {/*</TouchableWithoutFeedback>*/}
            </Modal>
        );
    }
}
