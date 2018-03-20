import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import NavDrawerPanel from './NavDrawerPanel';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import AuthorizedHowlComponent from './AuthorizedHowlComponent';

export default class NavigationDrawer extends AuthorizedHowlComponent {
    render(){
        const state = this.props.navigationState;
        const children = state.children;

        this.state = {

          tweenEasing: 'easeInOutQuad'

      }

        return (
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={()=>Actions.refresh({key:state.key, open: true})}
                onClose={()=>Actions.refresh({key:state.key, open: false})}
                type="displace"
                content={<NavDrawerPanel />}
                tweenEasing={this.state.tweenEasing}
                tapToClose={true}
                openDrawerOffset={0.15}
                panCloseMask={0.2}
                panOpenMask={0.2}
                acceptPan={true}
                negotiatePan={true}
                styles={drawerStyles.drawr}
                tweenHandler={(ratio) => {
                  return {
                    mainOverlay: { opacity: ratio === 0 ? 0 : 0.0, backgroundColor: '#063e5b' }
                  }
                }}
                // tweenHandler={Drawer.tweenPresets.parallax}
                >
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}

const drawerStyles = {
    drawer: {
        shadowColor: '#000', shadowOpacity: 0.9, shadowRadius: 1, backgroundColor:'#063e5b'
    },
    main: { paddingLeft: 0, backgroundColor:'#fff' }
}
