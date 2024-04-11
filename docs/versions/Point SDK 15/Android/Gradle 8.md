Gradle 8
==================

What has changed in [**Gradle 8.0**](https://developer.android.com/build/releases/gradle-plugin#8-0-0)
--------------------------------------------------------------------------------------------------

There are several new features and improvements added in Gradle version (AGP 8.0.0). Some of the major ones are:

**1\. Namespace mandatory in module-level build script**

The namespace declaration has been removed from AndroidManifest.xml and can now only be declared from the build.gradle.

**2\. Build option default values modified**

These changes have been made to improve build performance.

Here are a few examples of the new build option default values in Gradle version 8.0.0:

```gradle
android.defaults.buildfeatures.buildconfig (false)
android.defaults.buildfeatures.aidl (false)
android.defaults.buildfeatures.renderscript (false)
android.nonFinalResIds (true)
android.nonTransitiveRClass (true)
android.enableR8.fullMode (true)
```

For more details about them, please visit: [Android Gradle plugin release notes](https://developer.android.com/build/releases/gradle-plugin#default-changes).

**3\. Enforced build option values**

One of the changes in Gradle version 8.0.0 is that many build option default values have been modified to improve build performance, and some of them cannot be modified anymore.

Here are a few examples:

```gradle
android.r8.failOnMissingClasses (true)
android.enableNewResourceShrinker (true)
android.enableSourceSetPathsMap (true)
.....
```

For more details about them, please visit: [Android Gradle plugin release notes](https://developer.android.com/build/releases/gradle-plugin#enforced-changes)

Building Bluedot Point SDK with Gradle 8
----------------------------------------

When building a project incorporating the Bluedot Point SDK with Gradle 8, Please add the following ProGuard rules to your proguard-rules.pro file for a smooth build and to ensure the Bluedot SDK runs correctly.

```gradle
-dontwarn kotlinx.parcelize.Parcelize
#R8 full mode strips generic signatures from return types if not kept.
-if interface * { @retrofit2.http.* public *** *(...); }
-keep,allowoptimization,allowshrinking,allowobfuscation class <3>
#R8 full mode strips generic signatures from return types if not kept.
-keep,allowobfuscation,allowshrinking class retrofit2.Response
-keepattributes Signature
-keep class kotlin.coroutines.Continuation
```

:::note
These rules are already included as consumer ProGuard rules in the upcoming Bluedot SDK 16.x release. Therefore, if you update to SDK v16.x in the future, these changes do not need to be made explicitly from the app side.
:::