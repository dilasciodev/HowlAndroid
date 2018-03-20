package com.howl;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.airbnb.android.react.maps.MapsPackage;

import com.github.wumke.RNImmediatePhoneCall.RNImmediatePhoneCallPackage;
import com.soundapp.SoundModulePackage;
//import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.lynxit.contactswrapper.ContactsWrapperPackage;
import com.oblador.keychain.KeychainPackage;
import com.reactlibrary.mailcompose.RNMailComposePackage;
//import com.wix.RNCameraKit.RNCameraKitPackage;
import com.arttitude360.reactnative.rngoogleplaces.RNGooglePlacesPackage;
import com.chirag.RNMail.*;
import com.idehub.Billing.InAppBillingBridgePackage;
import com.lwansbrough.RCTCamera.*;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.appevents.AppEventsLogger;






import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

 protected static CallbackManager getCallbackManager() {
   return mCallbackManager;
 }



  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new FBSDKPackage(mCallbackManager),
          new MapsPackage(),
          new RNImmediatePhoneCallPackage(),
          new SoundModulePackage(),
          //new RCTCameraPackage(),
          new ContactsWrapperPackage(),
          new KeychainPackage(),
          new RCTCameraPackage(),
          new RNMailComposePackage(),
          new RNGooglePlacesPackage(),
          new RNMail() ,
          new InAppBillingBridgePackage("MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAm8bA3vA6HZOJA4XAdfB/C+0dvZ9JaGZFryv1XDXqGzjXE8Wp+NLak96m7IUDOXpLeeKOLxL6dj2fP/MUouLKLBLig3sjV5acqullT3Yhe2oXOBdnMIGWa1VLp5TfcCIFLwThyOARrIs3f1ScdcSRRNGUKSqcf3bcvwzdVq5CGaNKrHg7QRhF2M185XZTJCvOxG3wp62ktCIvn9C5hK4MAMc6X2NLESS4u7pI0xNyNqVL/Y+mVpgHgIHbwARyztE9GejWACR/vAYspVQ4gy1nzoEHk6Ss1jrGtiXFGPfBl4TG2lqElCkPL1RK9+uJ0mPro49UZVRPS/IenusXnAC3vwIDAQAB")



      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    FacebookSdk.sdkInitialize(getApplicationContext());
    AppEventsLogger.activateApp(this);
  }
}
