function zeropad(num: number, length: number): string {
    let num_str = "" + num
    while (num_str.length < length) {
        num_str = "0" + num_str
    }
    return num_str
}

input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    basic.showString("L")
    OLED.writeStringNewLine(zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.YEAR), 4) + "-" + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.MONTH), 2) + "-" + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY), 2) + " " + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR), 2) + ":" + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE), 2) + ":" + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND), 2))
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showString("A")
    OLED.writeStringNewLine("Knopf A")
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    OLED.clear()
    RTC_DS1307.setTime(RTC_DS1307.TimeType.YEAR, 2025)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.MONTH, 2)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.DAY, 10)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.HOUR, 22)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.MINUTE, 44)
    RTC_DS1307.setTime(RTC_DS1307.TimeType.SECOND, 0)
    OLED.writeStringNewLine("Uhrzeit gesetzt: " + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.YEAR), 4) + "-" + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.MONTH), 2) + "-" + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY), 2) + " " + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR), 2) + ":" + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE), 2) + ":" + zeropad(RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND), 2))
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showString("B")
    OLED.writeStringNewLine("Knopf B")
})
OLED.init(128, 64)
