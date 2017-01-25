//
//  TestManager.m
//  yyb
//
//  Created by yuanpeng on 2017/1/25.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "TestManager.h"

@implementation TestManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent: (NSString *) name location: (NSString *) location data: (NSDate *) date )
{
  RCTLogInfo(@"Pretending to create an event %@ at %@ in %@", name, location, date);
}

@end
