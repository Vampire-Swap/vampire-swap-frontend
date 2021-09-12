export class FeatureBanner {
    imagePath: string
    featureTitle: string
    featureSubtitle: string

    constructor(imagePath: string, featureTitle: string, featureSubtitle: string) {
        this.imagePath = imagePath;
        this.featureTitle = featureTitle;
        this.featureSubtitle = featureSubtitle;
    }
}