export interface AirPortSearchResultType {
    entityId: string;
    skyId: string;
    navigation: Record<string, any>; // Represents an object with dynamic properties
    presentation: Record<string, any>; // Same for presentation
    [key: string]: any; // Allows for additional unknown fields
}

export interface AirportInputProps {
    direction: string;
}
